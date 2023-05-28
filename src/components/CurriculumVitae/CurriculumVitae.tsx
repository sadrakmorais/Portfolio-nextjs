import * as S from "./CurriculumVitae.styles";

type CurriculumVitaeProps = {
  nameFile: string;
  pathFile: string;
};
export function CurriculumVitae({ nameFile, pathFile }: CurriculumVitaeProps) {
  return (
    <S.Wrapper>
      <S.CurriculumButton download={nameFile} target="_blank" href={pathFile}>
        <span>CURRÍCULO</span>
      </S.CurriculumButton>
    </S.Wrapper>
  );
}
