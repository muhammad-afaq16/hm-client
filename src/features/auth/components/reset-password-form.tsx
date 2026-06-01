'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, HeartPulse, LockKeyhole } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO:
    // const token = params.token
    // POST /api/auth/reset-password/:token
    // body: { newPassword }
  };

  return (
    <Card className='w-full max-w-md border-0 shadow-2xl'>
      <CardContent className='p-8'>
        <div className='mb-8 flex flex-col items-center text-center'>
          <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground'>
            <HeartPulse size={28} />
          </div>

          <h1 className='text-2xl font-bold'>Reset password</h1>

          <p className='mt-2 text-sm text-muted-foreground'>
            Enter your new password to regain access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='space-y-2'>
            <Label htmlFor='newPassword'>New password</Label>

            <div className='relative'>
              <LockKeyhole className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

              <Input
                id='newPassword'
                name='newPassword'
                type={showPassword ? 'text' : 'password'}
                placeholder='••••••••'
                className='px-10'
                required
              />

              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button type='submit' className='w-full'>
            Reset Password
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
