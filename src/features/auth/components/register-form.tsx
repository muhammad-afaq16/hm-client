'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff, HeartPulse } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('patient');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO:
    // call register mutation here
  };

  return (
    <Card className='w-full max-w-md border-0 shadow-2xl'>
      <CardContent className='p-8'>
        <div className='mb-8 flex flex-col items-center'>
          <div className='mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground'>
            <HeartPulse size={28} />
          </div>

          <h1 className='text-2xl font-bold'>Create account</h1>

          <p className='mt-2 text-sm text-muted-foreground'>
            Join the hospital management portal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Full name</Label>
            <Input id='name' name='name' placeholder='John Doe' required />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='john@example.com'
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='role'>Register as</Label>

            <Select value={role} onValueChange={setRole}>
              <SelectTrigger id='role'>
                <SelectValue placeholder='Select role' />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value='patient'>Patient</SelectItem>
                <SelectItem value='doctor'>Doctor</SelectItem>
              </SelectContent>
            </Select>

            <input type='hidden' name='role' value={role} />
          </div>

          {role === 'doctor' && (
            <div className='space-y-2'>
              <Label htmlFor='specialization'>Specialization</Label>
              <Input
                id='specialization'
                name='specialization'
                placeholder='Cardiologist'
                required
              />
            </div>
          )}

          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>

            <div className='relative'>
              <Input
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='••••••••'
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
            Create Account
          </Button>

          <p className='text-center text-sm text-muted-foreground'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='font-medium text-primary hover:underline'
            >
              Sign in
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
