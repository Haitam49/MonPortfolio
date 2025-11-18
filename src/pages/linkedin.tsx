// Linkedin.tsx
import { Linkedin } from "lucide-react";

export default function LinkedinButton() {
    return (
        <a
            href="https://www.linkedin.com/in/ton-profil" // remplace par ton URL LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 rounded hover:text-blue-600 transition-colors"
        >
            <Linkedin className="w-5 h-5" />
        </a>
    );
}
