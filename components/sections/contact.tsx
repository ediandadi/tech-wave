"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin } from "lucide-react";
import { Linkedin } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label, Select } from "@/components/ui/input";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company"),
  email: z.string().email("Please enter a valid email"),
  country: z.string().min(2, "Please enter your country"),
  interest: z.enum(["sourcing", "coordination", "both", "partnership", "press"], {
    message: "Please select an option",
  }),
  commodity: z.string().optional(),
  message: z.string().min(10, "Please share a few words about your inquiry"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactSectionProps {
  variant?: "section" | "page";
}

export function ContactSection({ variant = "section" }: ContactSectionProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Tech Wave inquiry:", data);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thank you. We'll be in touch within one business day.", {
      description: "Your inquiry has been received by the Tech Wave team.",
    });
    reset();
  };

  const isSection = variant === "section";

  const inner = (
    <Container size="xl">
      {isSection && (
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's talk."
          subtitle="Tell us what you're sourcing or what you need coordinated. We respond within one business day."
        />
      )}
      <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 ${isSection ? "mt-16" : ""}`}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-7 space-y-5"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" error={errors.name?.message}>
              <Input {...register("name")} placeholder="Your full name" autoComplete="name" />
            </Field>
            <Field label="Company" error={errors.company?.message}>
              <Input {...register("company")} placeholder="Your company" autoComplete="organization" />
            </Field>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Email" error={errors.email?.message}>
              <Input type="email" {...register("email")} placeholder="you@company.com" autoComplete="email" />
            </Field>
            <Field label="Country" error={errors.country?.message}>
              <Input {...register("country")} placeholder="Your country" autoComplete="country-name" />
            </Field>
          </div>
          <Field label="I'm interested in" error={errors.interest?.message}>
            <Select {...register("interest")} defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="sourcing">Sourcing</option>
              <option value="coordination">Coordination</option>
              <option value="both">Both</option>
              <option value="partnership">Partnership</option>
              <option value="press">Press</option>
            </Select>
          </Field>
          <Field label="Commodity of interest" error={errors.commodity?.message}>
            <Input {...register("commodity")} placeholder="e.g. Sesame, lithium, cocoa" />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <Textarea
              {...register("message")}
              placeholder="Tell us about volume, timeline, target market, and any specifics."
              rows={5}
            />
          </Field>
          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
            <p className="mt-4 text-xs text-[var(--muted-foreground)]/80">
              By submitting, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-2 hover:text-[var(--foreground)]">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-[var(--foreground)]">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </form>

        <aside className="lg:col-span-5 lg:pl-6 lg:border-l border-[var(--border)]">
          <div className="space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-3">
                Headquarters
              </p>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-[var(--accent)] flex-shrink-0" strokeWidth={1.5} />
                <div className="text-sm leading-relaxed text-[var(--foreground)]/85">
                  <div className="font-medium">Lagos, Nigeria</div>
                  <div className="text-[var(--muted-foreground)] mt-1">
                    [Address Placeholder]
                    <br />
                    Victoria Island, Lagos
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-3">
                Regional Offices
              </p>
              <div className="space-y-2 text-sm text-[var(--foreground)]/85">
                <div className="flex justify-between">
                  <span>Accra</span>
                  <span className="text-[var(--muted-foreground)]">Ghana</span>
                </div>
                <div className="flex justify-between">
                  <span>Abidjan</span>
                  <span className="text-[var(--muted-foreground)]">Côte d&apos;Ivoire</span>
                </div>
                <div className="flex justify-between">
                  <span>Douala</span>
                  <span className="text-[var(--muted-foreground)]">Cameroon</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-3">
                Direct
              </p>
              <a
                href="mailto:contact@techwave.ng"
                className="inline-flex items-center gap-2.5 text-sm text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors"
              >
                <Mail className="h-4 w-4 text-[var(--accent)]" strokeWidth={1.5} />
                contact@techwave.ng
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-3">
                Follow
              </p>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech Wave on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );

  if (isSection) {
    return (
      <Section spacing="lg" bg="default" id="contact">
        {inner}
      </Section>
    );
  }
  return <div className="py-12 sm:py-16">{inner}</div>;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-[var(--secondary)]">{error}</p>}
    </div>
  );
}
