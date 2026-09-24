import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import useSeo from '../useSeo'
import { COMPANY, CONTACT } from '../siteConfig'

export default function TermsPage() {
  useSeo('/villkor')

  return (
    <LegalPage
      label="Villkor"
      title="Allmänna villkor"
      intro={`Villkoren gäller när du anlitar ${COMPANY.name}${COMPANY.orgNumber ? ` (org.nr ${COMPANY.orgNumber})` : `, som drivs av ${COMPANY.owner}`}, för att ta fram en hemsida eller för tjänster som hosting och support. Står något annat i din offert eller ditt avtal gäller det före villkoren.`}
    >
      <h2>1. Offert och avtal</h2>
      <p>
        Innan vi börjar går vi igenom vad du behöver och skickar en offert med
        vad som ingår, pris och ungefärlig tidsplan. Avtalet gäller när du har
        godkänt offerten skriftligt, till exempel via mejl.
      </p>

      <h2>2. Pris och betalning</h2>
      <p>
        Priset är det vi har kommit överens om i offerten. Vill du lägga till
        något som inte ingår ger vi dig ett pris på det först, och vi gör inget
        extra arbete utan att du har godkänt det.
      </p>
      <p>
        Betalning sker mot faktura enligt de betalningsvillkor som står i
        offerten och på fakturan. Vid sen betalning har vi rätt att ta ut
        dröjsmålsränta enligt räntelagen och lagstadgad påminnelseavgift.
      </p>

      <h2>3. Det här behöver vi från dig</h2>
      <p>
        Du ansvarar för att skicka texter, bilder, logotyper och annat material
        som ska finnas på sidan i tid. Du ansvarar också för att du har rätt att
        använda materialet. Blir materialet försenat kan leveransen flyttas
        fram lika mycket.
      </p>

      <h2>4. Leverans och godkännande</h2>
      <p>
        Du får se sidan och lämna synpunkter innan den publiceras. Antalet
        ändringsrundor som ingår står i offerten. När du har godkänt sidan
        publicerar vi den.
      </p>

      <h2>5. Vem som äger vad</h2>
      <p>
        När hela beloppet är betalt har du full rätt att använda hemsidan,
        designen och innehållet vi har gjort åt dig. Vi får återanvända
        allmänna tekniska lösningar och kodbitar i andra uppdrag. Vi får också
        visa sidan som referens, om vi inte har kommit överens om något annat.
      </p>
      <p>
        Typsnitt, bilder från bildbyråer, tillägg och andra tjänster från
        tredje part följer sina egna licenser och villkor.
      </p>

      <h2>6. Hosting, domän och support</h2>
      <p>
        Hosting, domän och support är tillval som du kan beställa separat. Pris,
        vad som ingår och uppsägningstid står i offerten. Vi använder
        leverantörer för drift och kan inte ansvara för avbrott hos dem, men vi
        hjälper dig att lösa problemet om något händer.
      </p>

      <h2>7. Ansvar</h2>
      <p>
        Vi gör vårt bästa för att allt ska fungera, men vi ansvarar inte för
        indirekta skador som förlorad försäljning eller utebliven vinst. Vårt
        ansvar är begränsat till det belopp du har betalat för uppdraget. Om du
        är konsument gäller dessutom de rättigheter du har enligt lag, och de
        begränsas inte av villkoren.
      </p>

      <h2>8. Om du vill avbryta</h2>
      <p>
        Du kan avbryta ett pågående uppdrag. Du betalar då för det arbete som
        är utfört fram till dess.
      </p>

      <h2>9. Omständigheter utanför vår kontroll</h2>
      <p>
        Ingen av oss ansvarar för förseningar som beror på saker vi inte kan
        påverka, till exempel krig, naturkatastrofer, myndighetsbeslut eller
        större avbrott hos leverantörer.
      </p>

      <h2>10. Tvister</h2>
      <p>
        Svensk lag gäller. Blir vi oense försöker vi först lösa det tillsammans.
        Går det inte avgörs tvisten av allmän domstol. Är du konsument kan du
        också vända dig till Allmänna reklamationsnämnden (ARN).
      </p>

      <h2>11. Kontakt</h2>
      <p>
        Har du frågor om villkoren kan du mejla oss på{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Hur vi hanterar
        personuppgifter står i vår <Link to="/integritetspolicy">integritetspolicy</Link>.
      </p>
    </LegalPage>
  )
}
