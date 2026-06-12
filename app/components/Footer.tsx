export default function Footer() {
  return (
    <footer className="border-t py-10 text-center text-sm text-gray-500 slide-up">
      <p>© {new Date().getFullYear()} Made by NovaApps</p>
      <p className="mt-1">Find local businesses with confidence</p>
    </footer>
  );
}