import { getRacketOgById } from '@/services/getRacketOGById';
import { ImageResponse } from 'next/og'

export const alt = "OG image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

interface OGImageProps {
  params: Promise<{ racketId: string }>
}

const OGImage = async ({ params }: OGImageProps) => {
  const { racketId } = await params;
  const { isError, data } = await getRacketOgById({ id: racketId });

  if (isError || !data) {
    console.error("***** [ ~ opengraph-image.tsx ~ OGImage ~ isError ]", isError);
    return null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f3f4f6',
          padding: '40px',
        }}
      >
        {/* Изображение слева */}
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <img
            src={data.imageUrl}
            alt={data.name}
            style={{
              width: '300px',
              height: '400px',
              objectFit: 'contain',
              display: 'flex'
            }}
          />
        </div>

        {/* Текст справа */}
        <div style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          gap: '16px',
          padding: '20px'
        }}>
          <div style={{ fontSize: 36, fontWeight: 'bold', display: 'flex' }}>
            {data.name}
          </div>
          <div style={{ fontSize: 28, display: 'flex' }}>
            {data.brand.name}
          </div>
          <div style={{ fontSize: 28, display: 'flex' }}>
            {data.price} EUR
          </div>
        </div>
      </div>
    ),
    size
  )
}

export default OGImage;
