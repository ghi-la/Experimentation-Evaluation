import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>Hello, World!</div>
      <Link href="/form">Access the registration form</Link>
    </>
  );
}
