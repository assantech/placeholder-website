export default function Footer() {
  return (
    <footer>
      <div className="pb-3 pt-6 text-lg text-center fade-in">
        Copyright &copy; 2003-{new Date().getFullYear()}{" "}
        <a
          className="text-gray-500 no-underline hover:underline"
          href="https://hivesoft.it/"
        >
          hivesoft di Assante Christian
        </a>
      </div>
    </footer>
  );
}
