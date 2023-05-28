import * as S from "./CurriculumVitae.styles";

export function CurriculumVitae() {
  return (
    <S.Wrapper>
      <S.CurriculumButton
        download="CV - Sadrak Morais.pdf"
        target="_blank"
        href="assets/my-cv.pdf"
      >
        <span>CURRÍCULO</span>
      </S.CurriculumButton>
    </S.Wrapper>
  );
}
