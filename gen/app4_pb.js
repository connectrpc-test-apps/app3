// @generated by protoc-gen-es v1.9.0 with parameter "target=js"
// @generated from file app4.proto (package app4.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message app4.v1.CodeValidateRequest
 */
export const CodeValidateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "app4.v1.CodeValidateRequest",
  () => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message app4.v1.CodeValidateResponse
 */
export const CodeValidateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "app4.v1.CodeValidateResponse",
  () => [
    { no: 1, name: "valid", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);
