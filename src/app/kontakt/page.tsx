"use client"
import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit] = useForm("xyzkqznp")

  // If form is successfully submitted, show confirmation message instead
  if (state.succeeded) {
    return (
      <div className="mx-auto mt-10 w-full max-w-lg rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md">
        <h2 className="text-2xl font-semibold text-green-600">Tack för ditt meddelande! </h2>
        <p className="mt-2 text-gray-700">Vi återkommer till dig så snart vi kan.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-6 w-full max-w-lg space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md"
    >
      {/* Email Field */}
      <div className="flex flex-col text-left">
        <label htmlFor="email" className="font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Din e-postadress"
          className="mt-1 rounded-lg border p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message Field */}
      <div className="flex flex-col text-left">
        <label htmlFor="message" className="font-medium text-gray-700">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Skriv ditt meddelande här..."
          rows={4}
          className="mt-1 rounded-lg border p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-lg bg-purple-600 py-3 font-medium text-white transition-all hover:bg-purple-700"
      >
        {state.submitting ? "Skickar..." : "Skicka meddelande"}
      </button>
    </form>
  )
}

const ContactPage: React.FC = () => {
  return (
    <div className="mx-auto mt-4 max-w-3xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900">Kontakta oss</h1>
      <p className="mt-3 text-lg text-gray-600">Har du frågor? Fyll i formuläret så återkommer vi till dig.</p>

      <ContactForm />

      {/* Keep email option visible even after success */}
      <p className="mt-6 text-sm text-gray-600">
        Eller skicka ett mejl direkt till:{" "}
        <a href="mailto:kontakt@dataeden.se" className="font-medium text-purple-600 hover:underline">
          kontakt@dataeden.se
        </a>
      </p>
    </div>
  )
}

export default ContactPage
