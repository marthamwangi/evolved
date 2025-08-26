'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateProjectProposalAction, sendProjectProposalAction } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  userName: z.string().min(2, 'Please enter your name.'),
  userEmail: z.string().email('Please enter a valid email.'),
  projectDescription: z.string().min(20, 'Please provide a more detailed project description.'),
  desiredFeatures: z.string().min(10, 'Please list at least one desired feature.'),
  targetAudience: z.string().min(5, 'Please describe your target audience.'),
  budget: z.string().min(1, 'Please provide a budget.'),
  timeline: z.string().min(1, 'Please provide a timeline.'),
});

type FormData = z.infer<typeof formSchema>;

export default function ProjectProposalForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [proposal, setProposal] = useState<string  | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      userEmail: '',
      projectDescription: '',
      desiredFeatures: '',
      targetAudience: '',
      budget: '',
      timeline: '',
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setProposal(null);
    try {
      const result = await generateProjectProposalAction(values);
      if (result.proposal) {
        setProposal(result.proposal);
        setIsDialogOpen(true);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to generate proposal. Please try again.',
        });
      }
    } catch (error) {
       toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSendProposal() {
    setIsSending(true);
    const values = form.getValues(); // Get current form values including name and email
    if (proposal && values.userName && values.userEmail) {
      try {
        const result = await sendProjectProposalAction(proposal, { userName: values.userName, userEmail: values.userEmail });
        if (result.success) {
          toast({
            title: 'Proposal Sent!',
            description: "Your edited proposal has been sent.",
          });
          setIsDialogOpen(false); // Close the dialog on success
        } else {
       toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
      });
      }
    } finally {
      setIsSending(false);
    }
  }
}

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Generate a Project Proposal</CardTitle>
          <CardDescription>Fill in your project details to receive an AI-generated proposal instantly.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your project, goals, and what you want to achieve." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desiredFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Features</FormLabel>
                    <FormControl>
                      <Textarea placeholder="List key features, e.g., user authentication, payment gateway, admin dashboard..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Audience</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., small business owners" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timeline</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 3-6 months" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
               <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., $5,000 - $10,000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : 'Generate Proposal'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Your Project Proposal</DialogTitle>
            <DialogDescription>
              This proposal was generated by AI based on your input. Please review it and send it to us using the button below for next steps.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-96 w-full rounded-md border p-4">
            <div className="whitespace-pre-wrap text-sm" contentEditable={true}>{proposal}</div>
          </ScrollArea>
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={handleSendProposal} disabled={isSending}>
              {isSending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : 'Send Proposal'}
            </Button>
            </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
