export type ApplyField = "name" | "email" | "platform" | "note";

export type ApplyState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ApplyField, string>>;
};
