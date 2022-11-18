import { Injectable } from '@nestjs/common';

@Injectable()
export class BlockService {
  async getBlock() {
    return 'x';
  }
}
