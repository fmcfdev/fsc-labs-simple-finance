import Link from "next/link";
import { Button } from "../_lib/components/ui/button";
import Image from "next/image";

export function OAuthProviders() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex w-full items-center text-xs uppercase">
        <div className="flex-grow border-t" />
        <span className="px-4">ou continue com</span>
        <div className="flex-grow border-t" />
      </div>

      <div className="flex justify-center space-x-4">
        <Button
          type="button"
          variant="outline"
          className="h-9 w-9 rounded-full border-0 bg-gradient-to-b from-[#18acfe] to-[#0163e0] p-0"
          asChild
        >
          <Link
            href="/auth/facebook"
            className="flex items-center justify-center"
          >
            <Image
              src="/images/facebook.svg"
              alt="Facebook"
              width={12}
              height={12}
            />
          </Link>
        </Button>

        <Button
          type="button"
          variant="outline"
          className="h-9 w-9 rounded-full border-0 bg-[#283544] p-0 hover:bg-[#283544]"
          asChild
        >
          <Link href="/auth/apple" className="flex items-center justify-center">
            <Image src="/images/apple.svg" alt="Apple" width={16} height={16} />
          </Link>
        </Button>

        <Button
          type="button"
          variant="outline"
          className="rounded-full border-0 bg-[#141414] p-0 hover:bg-[#141414]"
          asChild
        >
          <Link href="/auth/google">
            <Image
              src="/images/google.svg"
              alt="Google"
              width={32}
              height={32}
            />
          </Link>
        </Button>
      </div>
    </div>
  );
}
