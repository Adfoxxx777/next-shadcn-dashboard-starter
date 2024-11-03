export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Все права защищены.
          </p>
          <nav className="flex gap-4">
            <a href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Конфиденциальность
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:underline">
              Условия использования
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
