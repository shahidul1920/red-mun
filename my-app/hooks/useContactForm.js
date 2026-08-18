"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/contact/actions";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    const userName = (formData.get("userName") || "").trim();
    const userEmail = (formData.get("userEmail") || "").trim();
    const userMessage = (formData.get("userMessage") || "").trim();

    if (!userName) {
      errors.userName = "Full name is required";
    }

    if (!userEmail) {
      errors.userEmail = "Email address is required";
    } else if (!EMAIL_REGEX.test(userEmail)) {
      errors.userEmail = "Please enter a valid email address";
    }

    if (!userMessage) {
      errors.userMessage = "Message is required";
    } else if (userMessage.length < 10) {
      errors.userMessage = "Message must be at least 10 characters long";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");
    setFieldErrors({});

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    // Client-side validation
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      return false;
    }

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus("success");
        formElement.reset();
        setIsSubmitting(false);
        return true;
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Failed to send message. Please try again.");
        setIsSubmitting(false);
        return false;
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage("An unexpected network error occurred. Please try again.");
      setIsSubmitting(false);
      return false;
    }
  };

  return {
    isSubmitting,
    submitStatus,
    errorMessage,
    fieldErrors,
    handleSubmit,
    setSubmitStatus,
  };
}
