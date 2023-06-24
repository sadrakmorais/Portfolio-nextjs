import * as S from "./AboutMe.styles";
import Image from "next/image";

export function AboutMe() {
  return (
    <S.Wrapper>
      <S.WrapperProfilePhoto>
        <Image
          className="logo"
          src="/assets/profile-photo.jpg"
          alt="Next.js Logo"
          width={130}
          height={130}
          priority
        />
      </S.WrapperProfilePhoto>
    </S.Wrapper>
  );
}
