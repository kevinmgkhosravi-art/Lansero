import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import useSeo from '../useSeo'
import { COMPANY, CONTACT } from '../siteConfig'

export default function PrivacyPage() {
  useSeo('/integritetspolicy')

  return (
    <LegalPage
      title="Integritetspolicy"
      intro="Här förklarar vi vilka personuppgifter vi samlar in, varför vi gör det och vilka rättigheter du har. Vi samlar bara in det vi behöver för att kunna hjälpa dig."
    >
      <h2>Vem ansvarar för dina uppgifter?</h2>
      <p>
        {COMPANY.name}
        {COMPANY.orgNumber
          ? `, organisationsnummer ${COMPANY.orgNumber}`
          : `, som drivs av ${COMPANY.owner}`}
        , {COMPANY.address}, är personuppgiftsansvarig. Du når oss på{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>Vilka uppgifter vi samlar in</h2>
      <ul>
        <li>Namn, e-postadress och telefonnummer när du kontaktar oss.</li>
        <li>Det du skriver till oss, till exempel en beskrivning av ditt projekt.</li>
        <li>Företagsnamn, adress och faktureringsuppgifter om du blir kund.</li>
        <li>Material du skickar till oss för hemsidan, som texter och bilder.</li>
      </ul>

      <h2>Varför vi använder dem</h2>
      <ul>
        <li>
          För att svara på din förfrågan och ge dig ett prisförslag. Det gör vi
          med stöd av vårt berättigade intresse av att kunna svara dem som hör av sig.
        </li>
        <li>
          För att genomföra uppdraget om du blir kund. Det gör vi för att
          fullgöra vårt avtal med dig.
        </li>
        <li>
          För bokföring och fakturering. Det gör vi för att bokföringslagen
          kräver det.
        </li>
      </ul>

      <h2>Hur länge vi sparar uppgifterna</h2>
      <p>
        Förfrågningar som inte leder till ett uppdrag raderar vi senast 12
        månader efter vår senaste kontakt. Uppgifter om kunder sparar vi så
        länge uppdraget pågår och så länge vi behöver dem för support eller
        garantifrågor. Bokföringsunderlag sparar vi i sju år efter utgången av
        det kalenderår då räkenskapsåret avslutades, enligt bokföringslagen.
      </p>

      <h2>Vilka som kan få ta del av uppgifterna</h2>
      <p>
        Vi säljer aldrig dina uppgifter. De kan behandlas av leverantörer som
        hjälper oss att driva verksamheten, till exempel e-post, webbhotell och
        bokföring. De får bara använda uppgifterna för att utföra tjänsten åt oss.
      </p>
      <p>
        Om du kontaktar oss via Discord gäller även Discords egen
        integritetspolicy. Discord är ett amerikanskt företag, vilket innebär
        att uppgifterna kan föras över till USA.
      </p>

      <h2>Kakor och besöksstatistik</h2>
      <p>
        Den här webbplatsen använder inga kakor. För att se hur sidan används
        mäter vi besök med Cloudflare Web Analytics. Verktyget sparar inget i
        din webbläsare och känner inte igen dig mellan besök. Vi ser bara
        samlad statistik, till exempel vilka sidor som besöks, vilken sida
        besökaren kom från, typ av webbläsare, land och hur snabbt sidan laddar.
        Vi gör det med stöd av vårt berättigade intresse av att förbättra sidan.
      </p>
      <p>
        Sidan drivs av Cloudflare, som också är vårt webbhotell. Cloudflare kan
        spara tekniska loggar, som IP-adresser, för att hålla sidan säker och
        fungerande. Cloudflare är ett amerikanskt företag och är anslutet till
        EU-U.S. Data Privacy Framework. Typsnitt och video laddas från vår egen
        webbplats, inte från någon annan tredje part.
      </p>

      <h2>Dina rättigheter</h2>
      <p>Enligt dataskyddsförordningen (GDPR) har du rätt att:</p>
      <ul>
        <li>få veta vilka uppgifter vi har om dig och få en kopia av dem,</li>
        <li>få felaktiga uppgifter rättade,</li>
        <li>få dina uppgifter raderade, om vi inte måste spara dem enligt lag,</li>
        <li>invända mot eller begära att vi begränsar hur vi använder dem,</li>
        <li>få ut uppgifter du gett oss i ett format som går att flytta.</li>
      </ul>
      <p>
        Mejla oss på <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> om
        du vill använda någon av dina rättigheter. Är du inte nöjd med hur vi
        hanterar dina uppgifter kan du klaga hos Integritetsskyddsmyndigheten
        (IMY) på <a href="https://www.imy.se" target="_blank" rel="noreferrer">imy.se</a>.
      </p>

      <h2>Ändringar</h2>
      <p>
        Vi kan uppdatera policyn om vi ändrar hur vi hanterar personuppgifter.
        Datumet högst upp visar när den senast ändrades. Våra{' '}
        <Link to="/villkor">allmänna villkor</Link> gäller när du anlitar oss.
      </p>
    </LegalPage>
  )
}
