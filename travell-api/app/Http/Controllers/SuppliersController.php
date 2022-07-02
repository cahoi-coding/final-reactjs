<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SuppliersController extends Controller
{
    public function getSuppliers(): array
    {
        $query = "SELECT * FROM travel.suppliers";
        return DB::select($query);
    }
}
