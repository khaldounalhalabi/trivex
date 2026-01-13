<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewsletterEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public string $title,
        public string $subtitle,
        public string $mainMessage,
        public string $token,
        public string $contactEmail,
        public string $contactAddress,
        public string $contactPhone,
        public ?string $tip = null,
    ) {}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('news-no-reply@tri-vex.com'),
            subject: "Trivex Newsletter [{$this->title}]",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.newsletter',
            with: [
                'title'       => $this->title,
                'subtitle'    => $this->subtitle,
                'mainMessage' => $this->mainMessage,
                'tip'         => $this->tip,
                'token'       => $this->token,
                'contactEmail' => $this->contactEmail,
                'contactAddress' => $this->contactAddress,
                'contactPhone' => $this->contactPhone,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
