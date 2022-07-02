<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{

//    public function test_the_application_returns_a_successful_response()
//    {
//        $response = $this->get('/');
//
//        $response->assertStatus(200);
//    }

    public function sumTest(int $a, int $b): int
    {
        return $a + $b;
    }

    public function test_example(): void
    {
        $arrTest = [1,5,9,0];
        $arrTestB = [11,5,9,20];
//        for($i = 0; $i < 100; $i++)
//        {
//            $result = sumTest($i, $i+1);
//            $this->assertEquals();
//        }
        for($x = 0; $x < count($arrTestB); $x++)
        {
            $this->assertContains($arrTestB[$x], $arrTest, "none");
        }
    }
}
