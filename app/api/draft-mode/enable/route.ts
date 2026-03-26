import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { client } from '@/sanity/lib/client';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(req: Request) {
  const clientWithToken = client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
    useCdn: false,
  });

  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    req.url,
  );

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();
  redirect(redirectTo);
}
