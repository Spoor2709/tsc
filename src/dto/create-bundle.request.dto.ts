import { BaseDto } from './base.dto';
import { IFiles } from '../interfaces/files.interface';

export class CreateBundleRequestDto extends BaseDto<CreateBundleRequestDto> {
  readonly baseURL: string;
  readonly sessionToken: string;
  readonly files: IFiles;
}
