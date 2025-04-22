import styled from "styled-components";
import { HeroCarousel } from "./components/HeroCarousel";
// ajuste o caminho se necessário

export function Landing() {
  return (
    <PageWrapper>
      <HeroCarousel/>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
