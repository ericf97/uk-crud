import { ArgumentMetadata, BadRequestException, Injectable, NestMiddleware, PipeTransform } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class IdValidator implements PipeTransform {
  async transform(value: any) {
    if (value.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      return value;
    }
    throw new BadRequestException('bad Id Format')
  }
}