import * as S from '../../page/projetos/projetos_styled'

export default function Card({video, imagem, texto, texto2}) {
  return (
    <S.Card>
      {video ? (
        <video controls>
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
      ) : (
        <img src={imagem} alt="" />
      )}
      <S.Texto1>{texto}</S.Texto1>
      {/* <p>{texto}</p> */}
      <p>{texto2}</p>
    </S.Card>

  )
}