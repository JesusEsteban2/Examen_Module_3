import { NextFunction, Request, Response } from 'express';
import { ProductsController } from './products.controller';
import createDebug from 'debug';
import type { AppResponse } from '../types/app-response';
import type { ProductCreateDTO } from './dto/products.dto';
import { Product } from '@prisma/client';
import { ProductRepo } from '../repo/products.repository.js';
import { vi } from 'vitest';


const mockRepo={
    getAll: vi.fn(),

} as ProductRepo;

const next = vi.fn() as NextFunction;
const req = {} as Request;
const res = {} as Response;



describe('Given productControler', () => {

    const producControler=new ProductsController(mocRepo);

    describe('Wen instance', () => {
        test('Then have a instance of ProductsController', () => {
            expect (producControler).toBeInstanceOf(ProductsController);
        });
    });

    describe('Wen getAll is called',()=>{
        test('',()=>{
            producControler.getAll(req,res,next)
            expect
        })
    });


    describe('',()=>{,()=>
    describe('',()=>{,()=>

    })
});
