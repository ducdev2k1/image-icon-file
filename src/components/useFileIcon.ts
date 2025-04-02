import mime from 'mime';
import { FileExtensions, mimeType, typeUnknown } from '../utils/my-variables';

export function actionGetMimeType(path: string) {
  const result = mime.getType(path);
  if (!result) {
    return typeUnknown;
  } else if (Array.isArray(result) && result.length > 0) {
    return result[0];
  } else {
    return result as string;
  }
}

export function getThumbnailIcon({ fileName, isDirectory }: { fileName: string; isDirectory?: boolean }) {
  // Hàm phụ trợ để trả về đường dẫn icon
  const iconBasePath = `/assets/icons`;
  const getIconPath = (iconName: string) => new URL(`${iconBasePath}/${iconName}`, import.meta.url).toString();

  // Trường hợp thư mục hoặc type không xác định
  if (isDirectory) {
    return getIconPath('folder.svg');
  }

  const type = fileName.split('.').pop() as string;
  const mimeTypeValue = actionGetMimeType(type);

  // Bản đồ icon mở rộng
  const iconMap: Record<string, string> = {
    svg: 'svg.svg',
    doc: 'docx.svg',
    docx: 'docx.svg',
    slx: 'excel.svg',
    xlsx: 'xlsx.svg',
    csv: 'csv.svg',
    xml: 'xml.svg',
    html: 'html.svg',
    one: 'one.svg',
    sql: 'sql.svg',
    log: 'log.svg',
    iso: 'iso.svg',
    apk: 'apk.svg',
    dmg: 'dmg.svg',
    exe: 'exe.svg',
    pdf: 'pdf.svg',
    pptx: 'pptx.svg',
    accdb: 'accdb.svg',
    cmd: 'cmd.svg',
    jar: 'jar.svg',
    json: 'json.svg',
    ovpn: 'ovpn.svg',
    psd: 'psd.svg',
    // Thêm các nhóm mở rộng vào iconMap
    ...FileExtensions.IMAGE.reduce(
      (acc, ext) => ({
        ...acc,
        [ext]: 'photo.svg',
      }),
      {},
    ),
    ...FileExtensions.ZIP.reduce(
      (acc, ext) => ({
        ...acc,
        [ext]: 'zip.svg',
      }),
      {},
    ),
    ...FileExtensions.AUDIO.reduce(
      (acc, ext) => ({
        ...acc,
        [ext]: 'audio.svg',
      }),
      {},
    ),
    ...FileExtensions.CODE.reduce(
      (acc, ext) => ({
        ...acc,
        [ext]: 'code.svg',
      }),
      {},
    ),
    ...FileExtensions.VISIO.reduce(
      (acc, ext) => ({
        ...acc,
        [ext]: 'vsdx.svg',
      }),
      {},
    ),
    ...FileExtensions.TXT.reduce(
      (acc, ext) => ({
        ...acc,
        [ext]: 'txt.svg',
      }),
      {},
    ),
    ...FileExtensions.MSPUBLISHER.reduce(
      (acc, ext) => ({
        ...acc,
        [ext]: 'pub.svg',
      }),
      {},
    ),
    ...FileExtensions.MSPROJECT.reduce(
      (acc, ext) => ({
        ...acc,
        [ext]: 'mpp.svg',
      }),
      {},
    ),
  };

  // Kiểm tra mime type cho video trước, sau đó kiểm tra iconMap
  if (mimeType.VIDEO.includes(mimeTypeValue) || FileExtensions.VIDEO.includes(type)) {
    return getIconPath('video.svg');
  }

  // Nếu type có trong iconMap, trả về icon tương ứng
  if (iconMap[type]) {
    return getIconPath(iconMap[type]);
  }
  // Mặc định cho file không xác định
  return getIconPath('genericfile.svg');
}
