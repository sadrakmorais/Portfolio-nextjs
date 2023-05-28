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
      <section>
        <S.ContactField href="https://github.com/sadrakmorais" target="_blank">
          <AiFillGithub />
          <p>/sadrakmorais</p>
        </S.ContactField>
        <S.ContactField href="mailto:sadraksdk1@gmail.com">
          <MdAlternateEmail />
          <p>sadraksdk1@gmail.com</p>
        </S.ContactField>
      </section>
    </S.Wrapper>
  );
}
