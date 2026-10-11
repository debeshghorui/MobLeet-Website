"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";

import { applyForAccess } from "@/app/actions/apply";
import type { ApplyState } from "@/lib/apply-state";

const INITIAL: ApplyState = { status: "idle" };

const PHONES = [
  { value: "ios", label: "iOS" },
  { value: "android", label: "Android" },
  { value: "both", label: "Both" },
] as const;

export function AccessForm() {
  const [state, action, pending] = useActionState(applyForAccess, INITIAL);
  const [draft, setDraft] = useState({
    name: "",
    email: "",
    platform: "",
    note: "",
  });
  const alertRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state.status === "error") alertRef.current?.focus();
    if (state.status === "success") successRef.current?.focus();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <section id="apply" className="scroll-mt-20">
        <div className="mx-auto max-w-[76rem] px-5 py-16 lg:py-24">
          <h2
            ref={successRef}
            tabIndex={-1}
            className="max-w-[16ch] text-4xl leading-[1.1] outline-none sm:text-5xl"
          >
            Application received
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed" role="status">
            We will email you if a testing spot opens.
          </p>
        </div>
      </section>
    );
  }

  const errors = state.fieldErrors;

  return (
    <section id="apply" className="scroll-mt-20">
      <div className="mx-auto grid max-w-[76rem] items-start gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div>
          <h2 className="max-w-[14ch] text-4xl leading-[1.1] sm:text-5xl">
            Request access to the app
          </h2>
          <p className="mt-5 max-w-[38ch] text-lg leading-relaxed">
            This form does not create an account in the app. It adds you to the
            internal testing list. If a spot opens, we email install
            instructions to the address you provide.
          </p>
        </div>

        <form
          noValidate
          className="relative max-w-lg rounded-3xl border border-line bg-surface p-5 sm:p-8 lg:max-w-none"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            startTransition(() => {
              action(formData);
            });
          }}
        >
          {state.status === "error" && state.message ? (
            <p ref={alertRef} tabIndex={-1} role="alert" className="form-alert">
              {state.message}
            </p>
          ) : null}

          <div className="trap" aria-hidden="true" inert>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-5">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={80}
                value={draft.name}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, name: event.target.value }))
                }
                aria-invalid={errors?.name ? true : undefined}
                aria-describedby={errors?.name ? "name-error" : undefined}
                className="field"
              />
              {errors?.name ? (
                <p id="name-error" className="field-error">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                autoCapitalize="none"
                required
                maxLength={120}
                value={draft.email}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                aria-invalid={errors?.email ? true : undefined}
                aria-describedby={errors?.email ? "email-error" : undefined}
                className="field"
              />
              {errors?.email ? (
                <p id="email-error" className="field-error">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <fieldset
              aria-invalid={errors?.platform ? true : undefined}
              aria-describedby={errors?.platform ? "platform-error" : undefined}
            >
              <legend>Which phone will you test on?</legend>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {PHONES.map((phone) => (
                  <label key={phone.value} className="choice choice-fill">
                    <input
                      type="radio"
                      name="platform"
                      value={phone.value}
                      checked={draft.platform === phone.value}
                      onChange={() =>
                        setDraft((current) => ({
                          ...current,
                          platform: phone.value,
                        }))
                      }
                    />
                    {phone.label}
                  </label>
                ))}
              </div>
              {errors?.platform ? (
                <p id="platform-error" className="field-error">
                  {errors.platform}
                </p>
              ) : null}
            </fieldset>

            <div>
              <label htmlFor="note">Note</label>
              <textarea
                id="note"
                name="note"
                rows={4}
                maxLength={400}
                value={draft.note}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, note: event.target.value }))
                }
                aria-invalid={errors?.note ? true : undefined}
                aria-describedby={errors?.note ? "note-error" : "note-hint"}
                className="field field-area"
              />
              {errors?.note ? (
                <p id="note-error" className="field-error">
                  {errors.note}
                </p>
              ) : (
                <p id="note-hint" className="field-hint">
                  Optional. What do you want to practice?
                </p>
              )}
            </div>
          </div>

          <button type="submit" className="btn mt-6 w-full" disabled={pending} aria-busy={pending}>
            {pending ? "Sending" : "Apply for access"}
          </button>

          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed">
            Your name, email, phone choice, and note are saved so we can
            invite testers. They are not published. In the app you sign in
            with GitHub or Google.
          </p>
        </form>
      </div>
    </section>
  );
}
