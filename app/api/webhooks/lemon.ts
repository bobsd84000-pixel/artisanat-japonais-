import crypto from 'crypto';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const sig = req.headers.get('x-signature-sha256');
  const body = await req.text();
  const secret = process.env.LEMON_WEBHOOK_SECRET!;
  const hash = crypto.createHmac('sha256', secret).update(body).digest('hex');
  
  if (hash !== sig) return new Response('Unauthorized', { status: 401 });
  
  const event = JSON.parse(body);
  if (event.meta.event_name === 'order:created') {
    const order = event.data.attributes;
    await supabase.from('orders').insert({
      lemon_id: event.data.id,
      customer_email: order.customer_email,
      total: order.total,
      status: 'paid',
    });
  }
  
  return new Response('OK');
}
