import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung von Studiocsy gemäß DSGVO.",
};

export default function DatenschutzPage() {
    return (
        <main className="bg-black pt-32 min-h-screen">
            <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24">
                <h1 className="font-heading text-5xl font-bold text-white mb-12">
                    Datenschutzerklärung
                </h1>

                <div className="prose prose-invert max-w-none text-zinc-300 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            1. Datenschutz auf einen Blick
                        </h2>
                        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                            Allgemeine Hinweise
                        </h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
                            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
                            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                            persönlich identifiziert werden können.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            2. Datenerfassung auf dieser Website
                        </h2>
                        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                        </h3>
                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den
                            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                            dieser Website entnehmen.
                        </p>

                        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                            Wie erfassen wir Ihre Daten?
                        </h3>
                        <p>
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                            mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
                            ein Kontaktformular eingeben.
                        </p>
                        <p>
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
                            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
                            allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
                            Uhrzeit des Seitenaufrufs).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            3. Hosting
                        </h2>
                        <p>
                            Diese Website wird bei einem externen Dienstleister gehostet
                            (Hoster). Die personenbezogenen Daten, die auf dieser Website
                            erfasst werden, werden auf den Servern des Hosters gespeichert.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            4. Allgemeine Hinweise und Pflichtinformationen
                        </h2>
                        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                            Datenschutz
                        </h3>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                            vertraulich und entsprechend der gesetzlichen
                            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            5. Kontaktformular
                        </h2>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
                            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
                            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
                            den Fall von Anschlussfragen bei uns gespeichert.
                        </p>
                        <p>
                            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                        <p>
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                            Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                            Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                            Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                            Verarbeitung auf unserem berechtigten Interesse an der effektiven
                            Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
                            DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
                            sofern diese abgefragt wurde.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            6. Ihre Rechte
                        </h2>
                        <p>Sie haben folgende Rechte:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Auskunft über Ihre gespeicherten Daten</li>
                            <li>Berichtigung unrichtiger Daten</li>
                            <li>Löschung Ihrer Daten</li>
                            <li>Einschränkung der Datenverarbeitung</li>
                            <li>Datenübertragbarkeit</li>
                            <li>Widerspruch gegen die Datenverarbeitung</li>
                            <li>
                                Beschwerde bei einer Aufsichtsbehörde
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                            7. Google Sheets Integration
                        </h2>
                        <p>
                            Diese Website nutzt Google Sheets zur Speicherung von
                            Kontaktformular-Daten. Dabei werden die von Ihnen eingegebenen
                            Daten an Google übermittelt und auf Servern von Google gespeichert.
                        </p>
                        <p>
                            Weitere Informationen zum Datenschutz bei Google finden Sie unter:{" "}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                https://policies.google.com/privacy
                            </a>
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
