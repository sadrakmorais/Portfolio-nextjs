import * as S from "./Header.styles";
import { AiFillGithub } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

type HeaderProps = {
  linkGithub: string;
  email: string;
  logoDevName: string;
  githubUser: string;
};
export function Header({
  logoDevName,
  email,
  linkGithub,
  githubUser,
}: HeaderProps) {
  return (
    <S.Wrapper>
      <h1>
        {logoDevName}
        <b>.tsx</b>
      </h1>
      <section>
        <S.ContactField href={linkGithub} target="_blank">
          <AiFillGithub />
          <p>/{githubUser}</p>
        </S.ContactField>
        <S.ContactField href={`mailto:${email}`}>
          <MdAlternateEmail />
          <p>{email}</p>
        </S.ContactField>
      </section>
    </S.Wrapper>
  );
}
