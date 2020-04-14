import { Controller, Get, Header } from '@nestjs/common';

@Controller('testing')
export class TestingController {
    @Get()
    @Header('Access-Control-Allow-Origin', 'http://localhost:3000')
    getTestData(): {} {
        return {
            test: 'test res'
        };
    }
}
