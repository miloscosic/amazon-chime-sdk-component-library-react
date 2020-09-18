// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { Ref, forwardRef } from 'react';

import { InputProps } from './';
import { StyledInput } from './Styled';

interface FileInputProps extends InputProps {
  optionText?: String;
}

export const FileInput = forwardRef(
  (props: FileInputProps, ref: Ref<HTMLInputElement>) => {
    const { id, optionText, onChange } = props;
    return (
      <>
        <StyledInput
          name={id}
          id={id}
          type="file"
          ref={ref}
          className="ch-file-input"
          onChange={onChange}
        />
        <label htmlFor={id}>{optionText}</label>
      </>
    );
  }
);

export default FileInput;
