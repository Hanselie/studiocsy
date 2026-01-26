import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Impressum",
    description: "Rechtliche Informationen und Kontaktdaten von Studiocsy.",
};

export default function ImpressumPage() {
    return (
        <main className="bg-black pt-32 min-h-screen">
            <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24">
                <h1 className="font-heading text-5xl font-bold text-white mb-12">
                    Impressum
                </h1>

                <div className="prose prose-invert max-w-none text-zinc-300 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            Angaben gemäß § 5 TMG
                        </h2>
                        <p>
                            <strong>Studiocsy</strong>
                            <br />
                            [Ihr Firmenname / Vollständiger Name]
                            <br />
                            [Straße und Hausnummer]
                            <br />
                            [PLZ und Ort]
                            <br />
                            Deutschland
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Kontakt</h2>
                        <p>
                            E-Mail: csymediaofficial@gmail.com
                            <br />
                            Telefon: [Ihre Telefonnummer]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            Umsatzsteuer-ID
                        </h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                            <br />
                            [Ihre USt-IdNr.]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                        </h2>
                        <p>
                            [Vollständiger Name]
                            <br />
                            [Adresse]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            EU-Streitschlichtung
                        </h2>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur
                            Online-Streitbeilegung (OS) bereit:{" "}
                            <a
                                href="https://ec.europa.eu/consumers/odr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                https://ec.europa.eu/consumers/odr
                            </a>
                            <br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            Verbraucherstreitbeilegung / Universalschlichtungsstelle
                        </h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an
                            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                            teilzunehmen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            Haftung für Inhalte
                        </h2>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                            Informationen zu überwachen oder nach Umständen zu forschen, die
                            auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                    </section>
                </div>

                <div className="mt-16">
                    <Link
                        href="/de"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        ← Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </main>
    );
}
