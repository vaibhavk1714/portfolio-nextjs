import React from 'react';
import {
    Html,
    Body,
    Head,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Heading
} from "@react-email/components";

type ContactFormEmailProps = {
    message: string,
    senderEmail: string;
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
    return (
        <Html>
            <Head></Head>
            <Preview>New message from your portfolio site</Preview>
            <Body className='bg-gray-100 !text-black'>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>You recieved the following message from the contact form
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>The sender&apos; email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}
