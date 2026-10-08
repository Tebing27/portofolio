export default function Footer() {
  return (
    <>
      <footer className="flex justify-center m-8">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tebing. All rights reserved.</p>
      </footer>
    </>
  );
}
