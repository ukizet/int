function NavBar({ className }: { className: string }) {
  return (
    <div className={className}>
      <button type="button" className="category">
        НОВИНКИ
      </button>
      <button type="button" className="category">
        ЧОЛОВІКИ
      </button>
      <button type="button" className="category">
        ЖІНКИ
      </button>
      <button type="button" className="category">
        АКСЕСУАРИ
      </button>
      <button type="button" className="category">
        АКЦІЇ
      </button>
    </div>
  );
}

export default NavBar;
