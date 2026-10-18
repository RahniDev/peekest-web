
export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-bone px-6 py-20 text-ink md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-concrete">
          Informations légales
        </p>

        <h1 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl">
          Mentions légales<span className="text-lime">.</span>
        </h1>

        <div className="space-y-12 leading-relaxed">
          {/* Publisher */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              1. Éditeur du site
            </h2>

            <p className="mb-4 text-concrete">
              Le site Peekest est édité par :
            </p>

            <ul className="space-y-2">
              <li>
                <strong>Nom commercial :</strong> Peekest
              </li>
              <li>
                <strong>Nom et prénom :</strong> [À compléter]
              </li>
              <li>
                <strong>Statut juridique :</strong> [À compléter selon votre situation]
              </li>
              <li>
                <strong>Adresse professionnelle :</strong> [À compléter]
              </li>
              <li>
                <strong>SIREN / SIRET :</strong> [À compléter si applicable]
              </li>
              <li>
                <strong>Adresse e-mail :</strong>{" "}
                <a
                  href="mailto:VOTRE-EMAIL"
                  className="underline decoration-lime decoration-2 underline-offset-4 hover:text-concrete"
                >
                  [Votre adresse e-mail]
                </a>
              </li>
              <li>
                <strong>Téléphone :</strong> [À compléter]
              </li>
              <li>
                <strong>Numéro de TVA intracommunautaire :</strong>{" "}
                [À compléter si applicable]
              </li>
            </ul>
          </section>

          {/* Publication director */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              2. Directeur de la publication
            </h2>

            <p className="text-concrete">
              Le directeur de la publication est [Nom et prénom de
              l'éditeur du site].
            </p>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              3. Hébergement
            </h2>

            <p className="mb-4 text-concrete">
              Le site est hébergé par :
            </p>

            <ul className="space-y-2">
              <li>
                <strong>Hébergeur :</strong> Vercel Inc.
              </li>
              <li>
                <strong>Adresse :</strong> 440 N Barranca Avenue #4133,
                Covina, CA 91723, États-Unis
              </li>
              <li>
                <strong>Site web :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-lime decoration-2 underline-offset-4 hover:text-concrete"
                >
                  vercel.com
                </a>
              </li>
              <li>
                <strong>Téléphone :</strong> [Coordonnées de contact
                de l'hébergeur à vérifier]
              </li>
            </ul>
          </section>

          {/* Intellectual property */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              4. Propriété intellectuelle
            </h2>

            <p className="text-concrete">
              Sauf indication contraire, les contenus présents sur ce
              site, notamment les textes, éléments graphiques et éléments
              visuels créés pour Peekest, sont protégés par les règles
              applicables en matière de propriété intellectuelle.
              Toute reproduction ou utilisation non autorisée de ces
              contenus est interdite, sous réserve des exceptions
              prévues par la loi et des droits appartenant à des tiers.
            </p>
          </section>

          {/* Liability */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              5. Responsabilité
            </h2>

            <p className="text-concrete">
              Les informations publiées sur ce site sont fournies à
              titre informatif. Des efforts raisonnables sont déployés
              pour en assurer l'exactitude et la mise à jour. Toutefois,
              aucune garantie n'est donnée quant à leur exhaustivité ou
              leur absence d'erreur. L'éditeur ne saurait être tenu
              responsable des dommages résultant de l'utilisation du
              site, dans les limites prévues par la loi.
            </p>
          </section>

          {/* Personal data */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              6. Données personnelles
            </h2>

            <p className="mb-4 text-concrete">
              Lorsque vous contactez Peekest par e-mail, les données
              personnelles que vous communiquez volontairement peuvent
              être utilisées pour répondre à votre demande et assurer
              le suivi de nos échanges.
            </p>

            <p className="mb-4 text-concrete">
              Ces données ne sont pas vendues. Elles sont conservées
              pendant une durée adaptée à la finalité du traitement et
              aux obligations légales applicables.
            </p>

            <p className="mb-4 text-concrete">
              Conformément à la réglementation applicable en matière
              de protection des données, notamment le RGPD, vous
              pouvez, selon les conditions prévues par la loi,
              demander l'accès à vos données, leur rectification,
              leur effacement ou la limitation de leur traitement.
            </p>

            <p className="text-concrete">
              Pour toute demande concernant vos données personnelles,
              vous pouvez écrire à : [Votre adresse e-mail].
              Vous pouvez également introduire une réclamation auprès
              de la CNIL :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-lime decoration-2 underline-offset-4 hover:text-concrete"
              >
                www.cnil.fr
              </a>.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              7. Cookies et traceurs
            </h2>

            <p className="text-concrete">
              Le site peut utiliser des cookies ou autres traceurs
              nécessaires à son fonctionnement. Les éventuels outils
              de mesure d'audience, services tiers et traceurs
              supplémentaires devront être déclarés conformément
              à la réglementation applicable. Lorsqu'un consentement
              est requis, il sera recueilli avant le dépôt des
              traceurs concernés.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">
              8. Mise à jour
            </h2>

            <p className="text-concrete">
              Les présentes mentions légales peuvent être modifiées
              afin de refléter les évolutions du site ou de la
              réglementation applicable.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
