"use client";

import React from "react";
import CompanyForm, { CompanyFormProps } from "./company-form";
// "@/app/components/company-form.tsx";
import Modal, { ModalProps } from "./modal";
// "@/app/components/modal.tsx";

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps["onSubmit"];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
