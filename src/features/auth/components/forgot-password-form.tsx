'use client';

import Link from 'next/link';
import { ArrowLeft, HeartPulse, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ForgotPasswordForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO:
    // POST /api/auth/forgot-password
    // body: { email }
  };

  return (
    <Card className='w-full max-w-md border-0 shadow-2xl'>
      <CardContent className='p-8'>
        <div className='mb-8 flex flex-col items-center text-center'>
          <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground'>
            <HeartPulse size={28} />
          </div>

          <h1 className='text-2xl font-bold'>Forgot password?</h1>

          <p className='mt-2 text-sm text-muted-foreground'>
            Enter your email and we’ll send you a reset link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email address</Label>

            <div className='relative'>
              <Mail className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

              <Input
                id='email'
                name='email'
                type='email'
                placeholder='john@example.com'
                className='pl-10'
                required
              />
            </div>
          </div>

          <Button type='submit' className='w-full'>
            Send Reset Link
          </Button>

          <Link
            href='/login'
            className='flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary'
          >
            <ArrowLeft size={16} />
            Back to login
          </Link>
        </form>
      </CardContent>
    </Card>
  );
}
