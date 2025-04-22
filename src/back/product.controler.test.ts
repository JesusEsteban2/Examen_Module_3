import { NextFunction, Request, Response } from 'express';
import { ProductsController } from './products.controller';
import { vi } from 'vitest';
import { error } from 'console';

const mockRepo = {
    read: vi.fn().mockResolvedValueOnce({}).mockRejectedValueOnce(error),
    readById: vi.fn().mockResolvedValueOnce({}).mockRejectedValueOnce(error),
    create: vi.fn().mockResolvedValueOnce({}).mockRejectedValueOnce(error),
    update: vi.fn().mockResolvedValueOnce({}).mockRejectedValueOnce(error),
    delete: vi.fn().mockResolvedValueOnce({}).mockRejectedValueOnce(error),
};

const next = vi.fn() as NextFunction;
const req = {
    params: { id: '1' },
} as unknown as Request;

const res = {
    json: vi.fn(),
} as unknown as Response;

describe('Given productControler', () => {
    const producControler = new ProductsController(mockRepo);

    describe('Wen instance', () => {
        test('Then have a instance of ProductsController', () => {
            expect(producControler).toBeInstanceOf(ProductsController);
        });
    });

    describe('Wen getAll is called', () => {
        test('Then json has been called', async () => {
            await producControler.getAll(req, res, next);
            expect(res.json).toHaveBeenCalledWith({
                error: '',
                results: {},
            });
            await producControler.getAll(req, res, next);
            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe('Wen getById is called', () => {
        test('Then json has been called', async () => {
            await producControler.getById(req, res, next);
            expect(res.json).toHaveBeenCalledWith({
                error: '',
                results: {},
            });
            await producControler.getById(req, res, next);
            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe('Wen create is called', () => {
        test('Then json has been called', async () => {
            await producControler.create(req, res, next);
            expect(res.json).toHaveBeenCalledWith({
                error: '',
                results: {},
            });
            await producControler.create(req, res, next);
            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe('Wen update is called', () => {
        test('Then json has been called', async () => {
            await producControler.update(req, res, next);
            expect(res.json).toHaveBeenCalled();
            await producControler.update(req, res, next);
            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe('Wen delete is called', () => {
        test('Then json has been called', async () => {
            await producControler.delete(req, res, next);
            expect(res.json).toHaveBeenCalled();
            await producControler.delete(req, res, next);
            expect(next).toHaveBeenCalledWith(error);
        });
    });
});
