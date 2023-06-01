import { Injectable } from "@nestjs/common";
import { PrismaService } from "@next-nest-boilerplate/api/data-access-db";
import {
  CreateOneHomeBlockArgs,
  DeleteOneHomeBlockArgs,
  FindUniqueHomeBlockArgs,
  UpdateOneHomeBlockArgs
} from "@next-nest-boilerplate/api/generated-db-types";

@Injectable()
export class HomeBlockService {
  constructor(private readonly prisma: PrismaService) {}

  create(createArgs: CreateOneHomeBlockArgs) {
    return this.prisma.homeBlock.create({
      data: createArgs.data,
      include: {
        rgbBackground: true
      }
    });
  }

  findAll() {
    return this.prisma.homeBlock.findMany({
      include: {
        rgbBackground: true
      }
    });
  }

  findOne(findArgs: FindUniqueHomeBlockArgs) {
    const { where } = findArgs;
    return this.prisma.homeBlock.findUnique({
      where,
      include: {
        rgbBackground: true
      }
    });
  }

  update(updateArgs: UpdateOneHomeBlockArgs) {
    const { where, data } = updateArgs;
    return this.prisma.homeBlock.update({
      where,
      data,
      include: {
        rgbBackground: true
      }
    });
  }

  remove(deleteArgs: DeleteOneHomeBlockArgs) {
    return this.prisma.homeBlock.delete({
      where: deleteArgs.where,
      include: {
        rgbBackground: true
      }
    });
  }
}
