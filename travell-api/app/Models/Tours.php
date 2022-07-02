<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Tours extends Model
{
    use HasFactory;

    public static function getTours(): array
    {
        $query = "SELECT * FROM travel.tours";
        return DB::select($query);
    }

    public static function getTour(int $tourId)
    {
        $query = "SELECT * FROM travel.tours as tt
                WHERE tt.tour_id = $tourId";
        return DB::select($query)[0];
    }
}
