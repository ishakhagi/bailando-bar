import Link from "next/link";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item">
        <Link href="/">Startseite</Link>
      </li>
      <li className="menu-item">
        <Link href="/#ueber">Über uns</Link>
      </li>

      <li className="menu-item">
        <Link href="/menu">Speisekarte</Link>
      </li>

      <li className="menu-item">
        <Link
          href="https://reservations.allo.restaurant/de/bailando-munchen"
          target="_blank"
        >
          Reservieren
        </Link>
      </li>

      <li className="menu-item">
        <Link href="/#kontakt">Kontakt</Link>
      </li>
    </ul>
  );
}
