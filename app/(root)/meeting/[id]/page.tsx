import MeetingPageClient from "@/components/MeetingPageClient";



type PageProps = { params: Promise<{ id: string }> };

export default async function MeetingPage({ params }: PageProps) {
  const { id } = await params;
  return <MeetingPageClient callId={id} />;
}
