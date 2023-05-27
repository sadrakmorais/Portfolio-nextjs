import * as S from "./Header.styles";
import { AiFillGithub } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

export function Header() {
  return (
    <S.Wrapper>
      <h1>
        SadrakMorais<b>.tsx</b>
      </h1>
      <S.ContactField>
        <AiFillGithub />
        <Link href="https://github.com/sadrakmorais" target="_blank">
          /sadrakmorais
        </Link>
      </S.ContactField>
      <S.ContactField>
        <MdAlternateEmail />
        <p>sadraksdk1@gmai.com</p>
      </S.ContactField>
    </S.Wrapper>
  );
}
