import { Page, Stack } from "./components";

export default function Contact() {
    return (
        <Page>
            <Stack direction="column" alignItems="center">
                <p>Please direct all inquiries to:</p>
                <a href="mailto:zherberger@gmail.com">zherberger@gmail.com</a>
            </Stack>
        </Page>
    )
}